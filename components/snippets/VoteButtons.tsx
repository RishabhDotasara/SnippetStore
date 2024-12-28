import { LoaderIcon } from "react-hot-toast";
import { useAPI } from "../../hooks/useAPI";

interface VoteButtonsProps {
  upvotes: number;
  snippetId: string;
  canVote?: boolean;
  snippetType: "snippet" | "block";
  setUpVotes?: (upvotes: number) => void;
}

export const VoteButtons = ({
  upvotes,
  snippetId,
  canVote = true,
  snippetType,
  setUpVotes
}: VoteButtonsProps) => {
  const { makeRequest, loading, error } = useAPI();


  const handleVote = async () => {
    // Will implement voting functionality later

    if (!canVote) return;

    const res = await makeRequest(
      `/code/${snippetType}/vote`,
      "POST",
      {id:snippetId},
      true
    );
    !error && setUpVotes && setUpVotes(upvotes + 1);
    console.log(res)
    // console.log(`Voted ${type} for snippet ${snippetId}`);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={!canVote ? () => {} : () => handleVote()}
        className="flex items-center gap-1 px-2 py-1 text-sm text-gray-600 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
      >
        {!loading ? <span>▲</span> : <LoaderIcon />}
        <span>{upvotes}</span>
      </button>
    </div>
  );
};
