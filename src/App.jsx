//import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Members from './Pages/Members';
import AboutUsOrganization from './Pages/Aboutus-organization';
import AboutUsMission from './Pages/Aboutus-mission';
import AboutUsObjectives from './Pages/Aboutus-objectives';
import ServicesTutoring from './Pages/Services-tutoring';
import ServicesTutoringMaths from './Pages/Services-tutoring-maths';
import ServicesTutoringScienceTechnology from './Pages/Services-tutoring-sciencetechnology';
import ServicesTutoringFrench from './Pages/Services-tutoring-french';
import ServicesTutoringEnglish from './Pages/Services-tutoring-english';
import ServicesDevelopmentCompetence from './Pages/Services-development-competence';
import ServicesOrientationMediation from './Pages/Services-orientation-mediation';
import ServicesMentoring from './Pages/Services-mentoring';
import ServicesDigitalCulture from './Pages/Services-digitalculture';
import ServicesSupportInternationalEducation from './Pages/Services-support-international-educational';


import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {

  return (
    <Router basename="/coopeea">
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/register" component={Members} />
        <Route path="/aboutus-organization" component={AboutUsOrganization} />
        <Route path="/aboutus-mission" component={AboutUsMission} />
        <Route path="/aboutus-objectives" component={AboutUsObjectives} />
        <Route path="/services-tutoring" component={ServicesTutoring} />
        <Route path="/services-tutoring-maths" component={ServicesTutoringMaths} />
        <Route path="/services-tutoring-sciencetechnology" component={ServicesTutoringScienceTechnology} />
        <Route path="/services-tutoring-french" component={ServicesTutoringFrench} />
        <Route path="/services-tutoring-english" component={ServicesTutoringEnglish} />
        <Route path="/services-development-competence" component={ServicesDevelopmentCompetence} />
        <Route path="/services-orientation-mediation" component={ServicesOrientationMediation} />
        <Route path="/services-mentoring" component={ServicesMentoring} />
        <Route path="/services-digital-culture" component={ServicesDigitalCulture} />
        <Route path="/services-support-international-education" component={ServicesSupportInternationalEducation} />
      </Switch>
    </div>
    </Router>
  );
}
export default App;
