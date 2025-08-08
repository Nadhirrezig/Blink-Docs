import { ClickableImage } from '@/components/ClickableImage';

interface CustomerScreenshotsProps {
  title?: string;
  description?: string;
  mobileSrc?: string;
  mobileAlt?: string;
  desktopSrc?: string;
  desktopAlt?: string;
}

export default function CustomerScreenshots({
  title = 'Unique By style',
  description = 'Preview how Blink looks and feels across devices. Tap any Image to view it full-screen.',
  mobileSrc = '/screenshots/mobile_view.jpg',
  mobileAlt = 'Mobile view preview',
  desktopSrc = '/screenshots/desktop_view.png',
  desktopAlt = 'Desktop view preview',
}: CustomerScreenshotsProps) {
  return (
    <section className="mb-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Screenshots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mobile View */}
        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mobile View</span>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-[360px]">
              <ClickableImage
                src={mobileSrc}
                alt={mobileAlt}
                width={360}
                height={720}
                className="w-full h-auto rounded-lg shadow-md"
                wrapperClassName="rounded-2xl"
                hoverEffect="subtle"
              />
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Desktop View</span>
          </div>
          <div className="w-full">
            <ClickableImage
              src={desktopSrc}
              alt={desktopAlt}
              width={1280}
              height={720}
              className="w-full h-auto rounded-lg shadow-md"
              wrapperClassName="rounded-2xl"
              hoverEffect="subtle"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

