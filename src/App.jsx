import TopBanner from './components/TopBanner/TopBanner';
import Services from './components/Services/Services';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Analysis from './components/Analysis/Analysis';
import Summary from './components/Summary/Summary'
import RecentProject from './components/RecentProjects/RecentProject';
import Courses from './components/Courses/Courses';
import Videos from './components/Videos/Videos';
import Review from './components/ClientReview/Review';
function App() {
  return (
    <div>
      <TopNavigation/>
      <TopBanner/>
      <Services/>
      <Analysis/>
      <Summary/>
      <RecentProject />
      <Courses/>
      <Videos/>
      <Review/>
    </div>
  );
}
export default App;
