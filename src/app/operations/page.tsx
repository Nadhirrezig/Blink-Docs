/**
 * Copyright (c) 2024 Blink - Venue Store ERP System
 *
 * Blink is a comprehensive venue store ERP system that provides
 * almost everything a venue needs for efficient operations.
 *
 * This software and its documentation are proprietary to Blink.
 * All rights reserved.
 */

import DocsLayout from '@/components/DocsLayout';
import Link from 'next/link';
import { Store, Monitor, CreditCard, Users, ChefHat, BarChart3, ArrowRight, Zap, BookOpen, Phone, ClipboardList } from 'lucide-react';

export default function OperationsGuide() {
  return (
    <DocsLayout>
      <div className="space-y-6 md:space-y-8">

        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
              <Store className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              In-Venue Operations Hub
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Access comprehensive training guides for all venue operations. Each section provides
            step-by-step instructions and best practices for efficient venue management.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 md:p-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-100">
              Operations Training Modules
            </h2>
          </div>
          <p className="text-blue-800 dark:text-blue-200 mb-6">
            Choose your training focus area below. Each module contains detailed processes,
            best practices, and visual guides to help you master venue operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/operations/pos-operations"
            className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-green-300 dark:hover:border-green-600 transition-all duration-200"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                <Monitor className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-700 dark:group-hover:text-green-300">
                  POS Operations
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Master the point-of-sale system, order taking, menu navigation, and payment processing.
                </p>
                <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-medium">
                  <span>Start Training</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/operations/payment-processing"
            className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-yellow-300 dark:hover:border-yellow-600 transition-all duration-200"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900/50 transition-colors">
                <CreditCard className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-700 dark:group-hover:text-yellow-300">
                  Payment Processing
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Learn secure cash handling, drawer management, and end-of-shift reconciliation.
                </p>
                <div className="flex items-center text-yellow-600 dark:text-yellow-400 text-sm font-medium">
                  <span>Start Training</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/operations/table-management"
            className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-200"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                <ChefHat className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-300">
                  Table Management
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Master seating assignments, order coordination, and efficient table turnover.
                </p>
                <div className="flex items-center text-purple-600 dark:text-purple-400 text-sm font-medium">
                  <span>Start Training</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/operations/customer-service"
            className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  Customer Service
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Deliver exceptional service with complaint resolution and emergency procedures.
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                  <span>Start Training</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Training Progress Section */}
        <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6 md:p-8">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center mr-3">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              Training Progress & Resources
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-2">
                <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Quick Reference</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                [PLACEHOLDER] Printable cheat sheets and quick reference guides
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-2">
                <Phone className="w-5 h-5 text-red-500 mr-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Emergency Contacts</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                [PLACEHOLDER] Important numbers and escalation procedures
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-2">
                <ClipboardList className="w-5 h-5 text-green-500 mr-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Training Checklist</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                [PLACEHOLDER] Track your progress through all operation modules
              </p>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
