import Navigation from './Navigation';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navigation />

      {/* Main content */}
      <main className="lg:ml-80 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Spacer for mobile menu button */}
          <div className="lg:hidden h-16 mb-4"></div>

          {/* Content wrapper with background */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-6 lg:p-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
