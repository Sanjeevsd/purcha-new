The file appears to have some duplicate sections and missing closing brackets. Here's the corrected version with proper closures and removal of duplicates:

[Previous content remains the same until the partner card section]

After the partner card section, remove the duplicate sections and add proper closing tags. The file should end with:

```jsx
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Purchasync?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Suppliers and Buyers</h3>
              <p className="text-gray-600">All suppliers and buyers are thoroughly vetted and verified for quality and reliability.</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Engagement</h3>
              <p className="text-gray-600">Connect directly with suppliers and buyers without intermediaries for better deals.</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Package className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">One-Stop Platform</h3>
              <p className="text-gray-600">Everything you need for hospitality procurement in one comprehensive platform.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Purchasync</h3>
              <p className="text-gray-400 mb-4">
                The leading B2B marketplace for hospitality procurement in the UAE and GCC region.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Food & Beverage</a></li>
                <li><a href="#" className="hover:text-white">Non-food & Consumables</a></li>
                <li><a href="#" className="hover:text-white">Furniture & Equipment</a></li>
                <li><a href="#" className="hover:text-white">Technology & IT</a></li>
                <li><a href="#" className="hover:text-white">Service Providers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Find Suppliers</a></li>
                <li><a href="#" className="hover:text-white">RFQ Process</a></li>
                <li><a href="#" className="hover:text-white">Tender Management</a></li>
                <li><a href="#" className="hover:text-white">Quality Assurance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dubai, UAE</li>
                <li>+971 4 XXX XXXX</li>
                <li>info@purchasync.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Purchasync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
```