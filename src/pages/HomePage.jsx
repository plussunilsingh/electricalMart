import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import { APP_CONFIG } from '../config/appConfig';
import { Filter, Search as SearchIcon, X } from 'lucide-react';

const HomePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSearch = queryParams.get('search') || '';
  const initialCategory = queryParams.get('category') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    setSearchQuery(queryParams.get('search') || '');
    setSelectedCategory(queryParams.get('category') || '');
    setCurrentPage(1); // Reset to first page on filter change
  }, [location.search]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8">
      {/* Hero / Search Section */}
      <section className="bg-secondary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full filter blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Premium <span className="text-primary">Electrical</span> & <br /> Safety Solutions
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Quality products, industrial standards, and fast delivery for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full bg-white text-secondary rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-4 focus:ring-primary/50 transition-all font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchIcon className="absolute left-4 top-4 text-gray-400 w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-64 space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center space-x-2">
              <Filter size={20} className="text-primary" />
              <span>Categories</span>
            </h3>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => setSelectedCategory('')}
                className={`text-left px-4 py-2.5 rounded-xl transition-all ${!selectedCategory ? 'bg-primary text-secondary font-bold shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}
              >
                All Products
              </button>
              {APP_CONFIG.categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left px-4 py-2.5 rounded-xl transition-all ${selectedCategory === cat ? 'bg-primary text-secondary font-bold shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Mobile Filters Toggle */}
        <div className="lg:hidden flex justify-between items-center">
          <h2 className="text-xl font-bold">Products</h2>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 font-medium"
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>

        {/* Product Grid */}
        <main className="flex-grow space-y-8">
          {filteredProducts.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-500 font-medium">
                  Showing {Math.min(filteredProducts.length, itemsPerPage)} of {filteredProducts.length} items
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-12 pb-8">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg border ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-100 text-secondary'}`}
                  >
                    Previous
                  </button>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(totalPages)].map((_, i) => {
                      const pageNum = i + 1;
                      // Only show first, last, and pages around current
                      if (
                        pageNum === 1 || 
                        pageNum === totalPages || 
                        (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`w-10 h-10 rounded-lg font-bold transition-all ${
                              currentPage === pageNum 
                                ? 'bg-primary text-secondary shadow-md' 
                                : 'hover:bg-gray-100 text-gray-500'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      } else if (
                        pageNum === currentPage - 2 || 
                        pageNum === currentPage + 2
                      ) {
                        return <span key={pageNum} className="px-1 text-gray-400">...</span>;
                      }
                      return null;
                    })}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg border ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-100 text-secondary'}`}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
              <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="text-gray-400 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">No products found</h3>
              <p className="text-gray-500 max-w-xs mx-auto mb-6">We couldn't find any products matching your search criteria. Try a different term or category.</p>
              <button 
                onClick={() => {setSearchQuery(''); setSelectedCategory('');}}
                className="btn-primary"
              >
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {showFilters && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowFilters(false)}></div>
          <div className="absolute top-0 right-0 bottom-0 w-80 bg-white shadow-2xl p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">Filters</h3>
              <button onClick={() => setShowFilters(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-4">Categories</h4>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => {setSelectedCategory(''); setShowFilters(false);}}
                    className={`text-left px-4 py-3 rounded-xl transition-all ${!selectedCategory ? 'bg-primary text-secondary font-bold' : 'bg-gray-50 text-gray-600'}`}
                  >
                    All Products
                  </button>
                  {APP_CONFIG.categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => {setSelectedCategory(cat); setShowFilters(false);}}
                      className={`text-left px-4 py-3 rounded-xl transition-all ${selectedCategory === cat ? 'bg-primary text-secondary font-bold' : 'bg-gray-50 text-gray-600'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
