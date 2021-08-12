import Filters from './components/Filters';
import Main from './components/Main';

export const App: React.FC = () => {
    return (
        <div className="wrapper">
            <Filters />
            <Main />
        </div>
    );
};
