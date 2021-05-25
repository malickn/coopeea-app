import React, { Component } from 'react'
import {connect } from 'react-redux';

class ServicesForm extends Component {
   
    render() {
        const hideFrench = {
            display : (this.props.language === 'English') ? "none" : "block"
        }

        const hideEnglish = {
            display : (this.props.language === 'English') ? "block" : "none"
        }

        return (
            <>
            <section>
                <div className="container" style={hideEnglish}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-2">
                                <span className="line"></span>
                                <p>{this.props.titleFrench}</p>
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
                                <p>{this.props.titleEnglish}</p>
                                <div className="subtitle">Bring the students to understand the concepts learned in class, give the learner strategies to better understand the concepts discussed in class, Raise or maintain academic motivation, self-esteem and self-confidence, Possibly explain the Quebec school structure (school curriculum)</div>
                                <div className="ulitems">
                                    <div><b>Types of courses and grade levels:</b></div>
                                    <div className="ulitem">- Elementary and High School Homework Support: Students, our children, need support with homework. This helps them keep up with the intense pace of learning in class, it helps them maintain their self-esteem as they understand the concepts in class and get good grades.</div>
                                    <div className="ulitem">- Reinforcement classes to help students keep up with the learning in the classroom in elementary and high school.</div>
                                    <div className="ulitem">- Individualized follow-up for elementary and secondary learners with special needs. </div>
                                    <div className="ulitem">
                                        <ul>
                                            <li>Students in enriched program classes: reinforcing learning to facilitate entry into selective college programs.</li>
                                            <li>Students in regular classes: need support to understand concepts covered in class, help with homework, maintain academic motivation.</li>
                                            <li>Students in special education classes: need for academic support, need for organizational assistance, ongoing or occasional support to stimulate academic motivation, support for tracking IPs (if authorized).</li>
                                            <li>Students in reception class: need for francization, social integration, support in learning and understanding evaluation, explanation of school curriculum</li>
                                        </ul>	
                                    </div>
                                    <div className="ulitem">- Academic upgrading plan for children with severe motivational difficulties (writing, speaking and reading; reasoning and solving in mathematics...)</div>
                                </div>
                                <div className="ulitems">
                                    <div><b>Means used to teach</b></div>
                                    <div className="ulitem">- Online or at home courses</div>
                                    <div className="ulitem">- Face-to-face classes in our offices (to come)</div>
                                </div>
                                <div className="ulitems">
                                    <div><b>Fees </b></div>
                                    <div className="ulitem">
                                        - Individual/discipline follow-up: (math, science, English, French...): 
                                        40$ per hour. A teacher will help you in the follow-up of your learning, he/she will agree with you on the pedagogical help that is necessary for you according to your level and according to the subjects. He/she will set up an adapted lesson plan for you and the necessary teachers for each subject.
                                    </div>
                                    <div className="ulitem">
                                        - Individual homework help: $40 per hour. The homework given by the teachers in class allows students to consolidate the notions learned in class. We provide a team that is able to help your kids with their homework and understanding of the concepts learned in class.
                                    </div>
                                    <div className="ulitem">
                                        - Group homework help: $25 per hour. Several learners are brought together and a teacher helps them with their homework, in groups of five learners.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(ServicesForm);