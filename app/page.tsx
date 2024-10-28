import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Tabs from './components/Courses/Courses';
import News from './components/News/News';
import Comment from './components/Comment/Comment';
import Newsletter from './components/Newsletter/Newsletter';

export default function Home() {
  return (
    <main>
      <Banner />
      <News />
      <Companies />
      <Tabs />
      <Comment />
      {/* <Newsletter /> */}
    </main>
  )
}
