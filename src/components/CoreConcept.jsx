/*export function CoreConcepts(props){
  return (
    <li>
    <img src={props.image} alt="" />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    </li>
  );
}*/

export default function CoreConcept({title,description,image}){
    return (
      <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      </li>
    );
  }