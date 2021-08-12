import { observer } from 'mobx-react-lite';
import Filters from './components/Filters';
import Main from './components/Main';
// import State from './mobX/State';

export const App: React.FC = observer(() => {
    return (
        <div className="wrapper">
            <Filters />
            <Main />
        </div>
    );
});
