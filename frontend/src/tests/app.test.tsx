import { UserRolesDataTable } from "@/components/settings/data_table/UserRolesTable";
import ActiveRoleSection from "@/components/settings/roles/ActiveRoleSection";
import AddUserToRoleModal from "@/components/settings/roles/modals/AddUserToRoleModal";
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { staticData } from "@/constants/user_roles";

// populate roles data before testing
beforeEach(() => {
  sessionStorage.setItem("rolesData", JSON.stringify(staticData));
});

afterEach(() => {
  sessionStorage.clear();
});

test("add role to user button opens modal", async () => {
  render(<ActiveRoleSection />);

  const button = screen.getByText(/add role to user/i);

  await userEvent.click(button);

  expect(screen.getByText(/select one or more roles/i)).toBeInTheDocument();
});

test("user can select a role", async () => {
  render(
    <AddUserToRoleModal
      isOpen={true}
      onClose={vi.fn()}
      onAddRoles={vi.fn()}
      alreadySetRoles={[]}
    />,
  );

  const checkbox = screen.getAllByRole("checkbox")[0];

  await userEvent.click(checkbox);

  expect(checkbox).toBeChecked();
});

test("shows table loader when fetching user roles", () => {
  render(<UserRolesDataTable data={[]} columns={[]} isLoading={true} />);

  expect(screen.getByTestId("table-loader")).toBeInTheDocument();
});

test("removing a role updates the UI", async () => {
  render(<ActiveRoleSection />);

  const card = screen.getByTestId("role-card-superadmin");
  const removeButton = within(card).getByText(/remove/i);

  await userEvent.click(removeButton);

  expect(screen.queryByText(/Superadmin/i)).not.toBeInTheDocument();
});

test("cannot remove the last remaining role", async () => {
  const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
  render(<ActiveRoleSection />);

  const removeButtons = screen.getAllByRole("button", { name: /remove/i });

  for (const button of removeButtons.slice(0, -1)) {
    await userEvent.click(button);
  }

  const lastRemoveButton = screen.getByText(/remove/i);
  await userEvent.click(lastRemoveButton);

  expect(alertMock).toHaveBeenCalledWith(
    expect.stringMatching(/at least one role should be left/i),
  );

  alertMock.mockRestore();
});
