import { PlayButton } from '../icons/PlayButton';

interface NewFeatureCardProps {
    onDismiss: () => void;
}

const NewFeatureCard = ({ onDismiss}: NewFeatureCardProps) => {
  return (
    <div className="w-full bg-gray-50 rounded-xl  p-6">
    <div className="space-y-2">
      <h3 className="text-lg text-gray-900">New features available!</h3>

      <p className="text-sm text-gray-500 leading-relaxed">
        Check out the new dashboard view. Pages now load faster.
      </p>
    </div>

    <div className="relative mt-4 overflow-hidden rounded-md">
      <img
        src="/images/news_banner.jpg"
        alt="New features thumbnail"
        className="w-full h-40 object-cover"
      />

      <div className="absolute left-5 bottom-5 flex items-center justify-center">
        <PlayButton />
      </div>
    </div>

    <div className="mt-4 flex items-center gap-4 text-sm">
      <button className="text-gray-500 cursor-pointer" onClick={onDismiss}>Dismiss</button>

      <button className="text-[#6941C6] cursor-pointer">What’s new?</button>
    </div>
  </div>
  )
}

export default NewFeatureCard