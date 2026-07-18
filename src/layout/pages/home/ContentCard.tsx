type Props = {
    text : string ;
    avatar : string;
}
export default function ContentCard({ text, avatar }: Props){

return(

    <>
        <img src={avatar} alt="" />
        <p>{text}</p>

    </>

)

}