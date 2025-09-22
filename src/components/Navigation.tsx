import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationItem {
  name: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  className = '',
}) => {
  const location = useLocation();

  return (
    <nav className={className}>
      <ul className="flex space-x-8">
        {items.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <li key={item.name}>
              <Link
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
