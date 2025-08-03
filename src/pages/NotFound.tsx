import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl blur-xl"></div>
        <div className="relative bg-card/90 backdrop-blur-sm border border-primary/20 shadow-elegant rounded-3xl p-8 sm:p-12 text-center max-w-md mx-4">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-2 font-montserrat">404</h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 font-montserrat">
              Oops! Page not found
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <Link to="/">
            <Button 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white font-montserrat"
            >
              <Home className="h-4 w-4 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
