// import React from 'react';

// // import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';


// export class Services extends React.Component {
    
//     render() {
//         const { categories} = this.props;
//         const servArray =  Object.keys(categories).map(key => {
//             return [key, categories[key]];
//         })
//         // const category = servArray.slice (1, 2 )

//         // console.log ("data:", data);
//         // console.log ("categories:", Object.values (categories))
//         console.log ("servArray:", servArray)
//         // console.log ("category:", category)
//         // console.log ("this.props:", this.props.app)

//         return (
//             <div className="main">
//                 <div className="wrapper">
//                     <div className = "doctors-wrap">
//                         {  servArray.map (( el, index )=> (
//                             <div className = "serv-wrap" key = {index}>
//                                 {   el[1].map ((item, index) => (
                                          
//                                     <div className = "servise-name" key = {index} >
//                                         <p>{item.name}</p>
//                                         <p>Длительность: {item.duration} ч.</p> 
//                                         <p>Цена: {item.price} грн.</p>
//                                         <div>
                                            
//                                             <button className = "btn service-btn"> Записаться на приём </button>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         ))
//                         }
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// const mapStateToProps = state => {
//     return {
//         app:state.app,
//         data:state.services.services,
//         categories:state.services.categories
//     }
// };

// const mapDispatchToProps = {

// };

// export default connect (mapStateToProps,mapDispatchToProps)(Services)


