import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Home = () => {
  return <h2>ホームページ</h2>;
}

const Profile = () => {
  return <h2>プロフィールページ</h2>;
}

const Contact = () => {
  return <h2>お問い合わせページ</h2>;
}

const NotFound = () => {
  return (
    <div>
      <h2>ページが見つかりません。</h2>
      <p>お探しのページは存在しないか、移動した可能性があります。</p>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>MyApp</h1>

        <nav>
          <Link to="/">🏠 ホーム</Link>
          <Link to="/profile">👤 プロフィール</Link>
          <Link to="/contact">📧 お問い合わせ</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;