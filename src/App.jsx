import { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [cart, setCart] = useState([]);

    const handleNavigate = (pageId) => {
        setCurrentPage(pageId);
    };

    // Add product to cart
    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // Remove product from cart
    const removeFromCart = (productId) => {
        const item = cart.find(item => item.id === productId);
        if (!item) return;

        if (item.quantity > 1) {
            setCart(cart.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            ));
        } else {
            setCart(cart.filter(item => item.id !== productId));
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'products':
                return <ProductsPage 
                    cart={cart} 
                    onAdd={addToCart} 
                    onRemove={removeFromCart} 
                />;
            case 'profile':
                return <ProfilePage />;
            case 'cart':
                return <CartPage cart={cart} onRemove={removeFromCart} />;
            case 'home':
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <Header
                currentPage={currentPage}
                onNavigate={handleNavigate}
                cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)}
            />
            <main>
                {renderPage()}
            </main>
            <footer style={{
                marginTop: '50px',
                padding: '20px',
                borderTop: '1px solid #eee',
                textAlign: 'center',
                color: '#666'
            }}>
                <p>React Multi-Page Application</p>
            </footer>
        </div>
    );
}

export default App;