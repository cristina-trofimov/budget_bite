import { Text } from '@mantine/core';
import React from 'react';
import RecipeComponent from '../components/RecipeComponent.tsx';

const Layout: React.FC = () => {
    return (
        <div>
            <Text>yes</Text>
            <header>
                {/* Add your header content here */}

            </header>
            <main>
                {/* This is where your page content will go */
               <RecipeComponent />
                
                }
            </main>
            <footer>
                {/* Add your footer content here */}
            </footer>
        </div>
    );
};

export default Layout;
