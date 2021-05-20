import React, { Component } from 'react'
import {connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import ServicesForm from '../components/ServicesForm';


class ServicesTutoringMaths extends Component {
   
    render() {
       
        const hideFrench = {
            display : (this.props.language === 'English') ? "none" : "block"
        }

        const hideEnglish = {
            display : (this.props.language === 'English') ? "block" : "none"
        }
        return (
            <>
            <Header />
            <section className="page-banner">
                <div className="page-banner-bg bg_cover" style={{backgroundImage: "url(assets/images/page-banner.jpg)"}}>
                    <div className="container">
                        <div className="banner-content text-center">
                            <h2 className="title" style={hideEnglish}>Nos services</h2>
                            <h2 className="title" style={hideFrench}>Our services</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container" style={hideEnglish}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                <span className="line"></span>
                                <p>Soutien Scolaire - Maths</p>
                                <div className="subtitle">Amener les apprenants à comprendre les notions apprises en classe, donner à l'apprenant des stratégies de mieux comprendre les concepts abordés en classe, relever ou maintenir la motivation scolaire, l'estime de soi, la confiance en soi, éventuellement expliquer la structure scolaire québécoise (curriculum scolaire)
                                </div>
                                <div className="ulitems">
                                    <div><b>Types de cours et niveaux scolaires :</b></div>
                                    <div className="ulitem">- Aide aux devoirs au primaire et au secondaire : Les élèves, nos enfants, ont besoin de soutien pour faire les devoirs à la maison. Cela les aide à suivre le rythme intense d'apprentissage en classe, cela les aide à garder leur estime de soi car ils comprennent les notions en classe et obtiennent de bonnes notes. </div>
                                    <div className="ulitem">- Cours de renforcement pour permettre aux élèves de suivre la progression des apprentissages en classe au primaire et au secondaire</div>
                                    <div className="ulitem">- Suivis individualisés pour les apprenants du primaire et du secondaire ayant des besoins spécifiques </div>
                                    <div className="ulitem">
                                        <ul>
                                            <li>Élèves en classe de programme enrichi : renforcer les acquis pour faciliter l'orientation dans les programmes sélectifs aux collèges</li>
                                            <li>Élèves en classe régulière : besoin de soutien pour comprendre les concepts abordés en classe, aide aux devoirs, entretenir la motivation scolaire</li>
                                            <li>Élèves en classe d'adaptation scolaire : besoin de soutien académique, besoin d'aide organisationnelle, appui continu ou occasionnel pour stimuler la motivation scolaire, support pour suivi des PIA (si autorisé)</li>
                                            <li>Élèves en classe d'accueil : besoin en francisation, en intégration sociale, accompagnement dans l'apprentissage et la compréhension des évaluation, explication curriculum scolaire </li>
                                        </ul>	
                                    </div>
                                    <div className="ulitem">- Plan de mise à niveau scolaire pour enfant en grande difficulté motivationnelle (écriture, oral et lecture; raisonnement et résolution en mathématique …)</div>
                                </div>
                                <div className="ulitems">
                                    <div><b>Moyens utilisés pour enseigner</b></div>
                                    <div className="ulitem">- Cours en ligne ou à domicile</div>
                                    <div className="ulitem">- Cours en présentiel dans nos locaux (à venir)</div>
                                </div>
                                <div className="ulitems">
                                    <div><b>Honoraires </b></div>
                                    <div className="ulitem">
                                        - Suivi individuel/discipline : (mathématique, sciences, anglais, français…) : 
                                        40$ par heure. Un.e enseignant.e vous aide dans le suivi de votre apprentissage, il.elle convient avec vous de l'aide pédagogique qui est nécessaire pour vous selon votre niveau et selon les disciplines. Il.elle mettra en place pour vous un plan de cours adapté et les professeurs par matières nécessaires.
                                    </div>
                                    <div className="ulitem">
                                        - Aide aux devoirs individuelle : 40$ par heure. Les devoirs donnés par les enseignant.e.s en classe permettent aux élèves de consolider les notions apprises en classe. Nous mettons à votre disposition une équipe qui est capable d'aider vos jeunes à faire les devoirs et à comprendre les notions apprises en classe.
                                    </div>
                                    <div className="ulitem">
                                        - Aide aux devoirs en groupe : 25 $ par heure. Plusieurs apprenants sont réunis et un.e enseignant.e les aide à faire leurs devoirs, avec des groupes de cinq apprenants.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={hideFrench}>
                    <div className="row">
                    <div className="col-lg-12">
                            <div className="section-title-2">
                                <span className="line"></span>
                                <p>Tutoring - Maths</p>
                                <div className="subtitle">Help learners understand the concepts learned in class, give the learner strategies to better understand the concepts discussed in class, increase or maintain academic motivation, self-esteem, self-confidence, Possibly explain the Quebec school structure (school curriculum)
                                </div>
                                <div className="ulitems">
                                    <div><b>Types of courses and grade levels:</b></div>
                                    <div className="ulitem">- Elementary and Secondary Homework Help: Students, our children, need support to do homework at home. It helps them keep up with the intense pace of learning in class, it helps them to keep their self-esteem as they understand the concepts in class and get good grades. </div>
                                    <div className="ulitem">- Reinforcement courses to allow students to follow the progress of learning in class at the elementary and secondary levels</div>
                                    <div className="ulitem">- Individualized follow-ups for primary and secondary learners with specific needs </div>
                                    <div className="ulitem">
                                        <ul>
                                            <li>Students in enriched program class: reinforce their knowledge to facilitate orientation in selective programs at colleges</li>
                                            <li>Students in regular class: need support to understand the concepts discussed in class, help with homework, maintain academic motivation</li>
                                            <li>Students in special education class: need for academic support, need for organizational help, continuous or occasional support to stimulate academic motivation, support for PIA monitoring (if authorized)</li>
                                            <li>Students in reception class: need for francization, social integration, support in learning and understanding evaluation, explanation of school curriculum</li>
                                        </ul>	
                                    </div>
                                    <div className="ulitem">- School upgrade plan for children with great motivational difficulties (writing, speaking and reading; reasoning and solving in mathematics, etc.)</div>
                                </div>
                                <div className="ulitems">
                                    <div><b>Means used to teach</b></div>
                                    <div className="ulitem">- Online or home lessons</div>
                                    <div className="ulitem">- Face-to-face lessons in our premises (coming soon)</div>
                                </div>
                                <div className="ulitems">
                                    <div><b>Fees </b></div>
                                    <div className="ulitem">
                                        - Individual / discipline follow-up: (mathematics, science, English, French ...) : 
                                        $ 40 per hour. A teacher helps you in monitoring your learning, he and she agrees with you on the pedagogical help that is necessary for you according to your level and according to the disciplines. He / she will set up an adapted lesson plan for you and the teachers by subject required.
                                    </div>
                                    <div className="ulitem">
                                        - Individual homework help: $ 40 per hour. Homework given by teachers in class allows students to consolidate concepts learned in class. We provide you with a team that is able to help your children with homework and understand the concepts learned in class.
                                    </div>
                                    <div className="ulitem">
                                        - Group homework help: $ 25 per hour. Several learners are brought together and a teacher helps them with their homework, with groups of five learners.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br/><br/>
            <ServicesForm />
            <Newsletter />
            <Footer />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        language : state.language
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onChangeLanguage: (language) => dispatch({ type: language }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicesTutoringMaths);