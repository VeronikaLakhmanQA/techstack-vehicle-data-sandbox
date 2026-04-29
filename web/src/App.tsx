import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { MultipleVinsPage } from './pages/MultipleVinsPage'
import { SingleVinPage } from './pages/SingleVinPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/single-vin" element={<SingleVinPage />} />
          <Route path="/multiple-vins" element={<MultipleVinsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
