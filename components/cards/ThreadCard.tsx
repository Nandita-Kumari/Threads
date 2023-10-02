import Image from "next/image";
import Link from "next/link";

interface Props {
    id: string;
    currentUserId: string;
    parentId: string | null;
    content: string;
    author: {
        name: string;
        image: string;
        id: string ;
    } 
    community: {
        id: string;
        name: string;
        image: string;
    } | null;
    createdAt: string;
    comments: {
        author: {
            image: string;
        }
    }[]
    isComment?: boolean;
}




const ThreadCard = ({
    id,
    currentUserId,
    parentId,
    content,
    author,
    community,
    createdAt,
    comments
}: Props) => {
    console.log('Author:', author);
    return (
        <article className="flex w-full flex-col rounded-xl bg-dark-2 p-7">
            <div className="flex items-start justify-between">
                <div className="flex w-full flex-1 flex-row gap-4">
                    <div className="flex flex-col items-center">
                    {author ? (
                        <Link href={`/profile/${author?.id}`} className="relative h-11 w-11">
                            <Image
                                src={author.image}
                                alt="profile image"
                                fill
                                className="cursor-pointer rounded-full"
                            />
                        </Link>
                        ) : (
                            null
                          )}
                        <div className="thread-card_bar" />
                    </div>

                    <div className="flex w-full flex-col">
                    {author ? (
                        <Link href={`/profile/${author.id}`} className="w-11">
                            <h4 className="cursor-pointer text-base-semibold text-light-1">{author.name}</h4>
                        </Link>
                        ) : (
                            null
                        )}
                        <p className="mt-2 text-small-regular text-light-2">{content}</p>
                    </div>
                </div>
            </div>

            
        </article>
    )
}

export default ThreadCard;