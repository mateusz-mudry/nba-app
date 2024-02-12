// import { createBrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'
import { HomePage } from "../routes/HomePage/HomePage";
import { NewsPage } from '../routes/NewsPage/NewsPage';
import { PlayersPage } from '../routes/PlayersPage/PlayersPage';
import { StatsPage } from '../routes/StatsPage/StatsPage';
import { TeamsPage } from '../routes/TeamsPage/TeamsPage';
import { GamesPage } from '../routes/GamesPage/GamesPage';


export const AppRouter = () => {
    return (
      <>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/players' element={<PlayersPage />} />
          <Route path='/stats' element={<StatsPage />} />
          <Route path='/teams' element={<TeamsPage />} />
          <Route path='/games' element={<GamesPage />} />
        </Routes>
      </>
    )
  }