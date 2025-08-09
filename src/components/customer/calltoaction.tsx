import { Gift } from "lucide-react"
import Link from "next/link"
export default function Calltoaction(){
    return (
        
        <div className="text-center">
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Gift className="w-16 h-16" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Experience the Future of Dining?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join customers who have discovered the convenience, 
              speed, and personalization that Blink brings to every dining experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/customer/online-ordering"
                className="inline-block px-8 py-3 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-lg font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
    )
}