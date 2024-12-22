import {useParams } from "react-router-dom";
import GetSnippetById from "./GetSnippetById";
``

export default function ShowSnippetPage() {
  const { id } = useParams<{ id: string }>();

  return <GetSnippetById id={id || ""} />;
}
