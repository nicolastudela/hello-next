import { Link } from '../uiLibrary'


const PostLink = props => (
    <li>
      <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
        {props.name}
      </Link>
    </li>
  );


const PostList = (props) => (
    <>
        <h2>{`${props.title} TV Shows`}</h2>
        <ul >
            {props.shows.map(({ show }) => (
            <PostLink key={show.id} {...show} />
            ))}
        </ul>
    </>        
)

export default PostList