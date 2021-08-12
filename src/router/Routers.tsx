// import { Redirect, Route, Switch } from 'react-router-dom';
// import { ContactsPage } from '../pages/contacts/ContactsPage';
// import { LoginPage } from '../pages/login/LoginPage';
// import { OptionsPage } from '../pages/options/OptionsPage';
// import { TasksPage } from '../pages/tasks/TasksPage';

export const useRouters = (status: boolean) => {
    if (status) {
        return (
            <Switch>
                {/* <Route exact path="/contacts" component={ContactsPage} />
                <Route exact path="/options" component={OptionsPage} />
                <Route exact path="/tasks" component={TasksPage} />
                <Redirect to="/contacts" /> */}
            </Switch>
        );
    } else {
        return (
            <Switch>
                {/* <Route exact path="/login" component={LoginPage} />
                <Redirect to="/login" /> */}
            </Switch>
        );
    }
};
