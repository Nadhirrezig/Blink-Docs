
import { Users } from 'lucide-react';

export default function HeaderCustomer(){
    return (
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
              <Users className="w-16 h-16" />
            </div>  
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Customer Guide
        </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the complete customer experience with Blink&apos;s advanced ordering system.
            From seamless dine-in experiences to convenient pickup, learn how to make the most of every interaction.
          </p>
        </div>
    )
}