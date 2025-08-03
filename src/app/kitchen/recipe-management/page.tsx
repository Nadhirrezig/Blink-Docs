import DocsLayout from '@/components/DocsLayout';

export default function RecipeManagement() {
  return (
    <DocsLayout>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          5.2 Recipe Management
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Recipe Database
        </h2>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          [ADD YOUR TEXT HERE]
        </p>

        {/* ADD SCREENSHOT HERE */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400">
            {/* ADD SCREENSHOT HERE */}
            Add recipe database interface screenshot here
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Creating Recipes
        </h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            Recipe Components
          </h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
            <li>• [ADD YOUR TEXT HERE]</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
            Step-by-Step Creation
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">1. Basic Information</h4>
              <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1">
                <li>[ADD YOUR TEXT HERE]</li>
                <li>[ADD YOUR TEXT HERE]</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">2. Ingredients List</h4>
              <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1">
                <li>[ADD YOUR TEXT HERE]</li>
                <li>[ADD YOUR TEXT HERE]</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">3. Preparation Steps</h4>
              <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1">
                <li>[ADD YOUR TEXT HERE]</li>
                <li>[ADD YOUR TEXT HERE]</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">4. Cooking Instructions</h4>
              <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1">
                <li>[ADD YOUR TEXT HERE]</li>
                <li>[ADD YOUR TEXT HERE]</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Recipe Standardization
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Portion Control
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Consistency Guidelines
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Ingredient Management
        </h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Inventory Integration
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Substitutions
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>
        </div>

        {/* ADD CODE EXAMPLE HERE */}
        <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 mb-8">
          <h3 className="text-lg font-semibold text-white mb-2">
            Recipe Structure Example
          </h3>
          <p className="text-gray-400 text-sm mb-2">
            {/* ADD CODE EXAMPLE HERE */}
          </p>
          <pre className="text-green-400 text-sm">
            <code>
{`{
  "name": "Margherita Pizza",
  "servings": 1,
  "prep_time": "15 minutes",
  "cook_time": "12 minutes",
  "ingredients": [
    {
      "name": "Pizza Dough",
      "quantity": "1",
      "unit": "ball"
    },
    {
      "name": "Tomato Sauce",
      "quantity": "4",
      "unit": "oz"
    },
    {
      "name": "Mozzarella Cheese",
      "quantity": "3",
      "unit": "oz"
    }
  ],
  "instructions": [
    "Preheat oven to 450°F",
    "Roll out pizza dough",
    "Spread tomato sauce evenly",
    "Add mozzarella cheese",
    "Bake for 10-12 minutes"
  ]
}`}
            </code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Recipe Updates
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Version Control
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Staff Notifications
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Cost Calculation
        </h2>
        
        <div className="space-y-6">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
              Ingredient Costing
            </h3>
            <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
              Profit Margin Analysis
            </h3>
            <ul className="space-y-2 text-purple-800 dark:text-purple-200">
              <li>• [ADD YOUR TEXT HERE]</li>
              <li>• [ADD YOUR TEXT HERE]</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
