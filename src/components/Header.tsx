import { Button } from "@/components/ui/button";
import { Home, Building2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">RentFinder</span>
        </div>
        
        <nav className="flex items-center gap-6">
          <a href="#properties" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Browse Properties
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="gap-2">
              <Building2 className="h-4 w-4" />
              List Property
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
