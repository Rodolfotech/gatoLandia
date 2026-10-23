import Breadcrumb from "../components/Breadcrumb";
import CategoryNav from "../components/CategoryNav";
import { ArticleBrowserOutlet, ArticleBrowserProvider } from "../components/ArticleBrowser";

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <ArticleBrowserProvider>
      <div className="flex min-h-screen flex-col bg-(--cream)">
        <CategoryNav />
        <div className="min-w-0 flex-1">
          <Breadcrumb />
          <ArticleBrowserOutlet>{children}</ArticleBrowserOutlet>
        </div>
      </div>
    </ArticleBrowserProvider>
  );
}
