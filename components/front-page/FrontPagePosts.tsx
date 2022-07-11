import Image from 'next/image'
import Link from 'next/link'

// TODO: Add posts type defintion
const FrontPagePosts = ({ posts }: any) => {
  return (
    <>
      {posts && (
        <div className="space-y-6">
          {posts.map((post: any) => {
            return (
              <div key={post?.id}>
                <div className="lg:flex lg:items-center lg:p-5 lg:border lg:border-solid lg:border-gray-300 lg:rounded-t-[8px]">
                  <div className="relative w-[32px] h-[32px] mr-2 rounded-full overflow-hidden">
                    <Link href={`/${post?.author?.username}`}>
                      <a>
                        <Image
                          src={post?.author?.image}
                          alt={post?.author?.name}
                          width={32}
                          height={32}
                        />
                      </a>
                    </Link>
                  </div>
                  <span className="text-sm font-semibold">
                    <Link href={`/${post?.author?.username}`}>
                      <a>{post?.author?.username}</a>
                    </Link>
                  </span>
                </div>
                <div className="relative -mb-2">
                  {post?.image && (
                    <Image
                      src={post?.image}
                      alt={post?.title}
                      width={470}
                      height={470}
                      quality={100}
                    />
                  )}
                </div>
                <div className="lg:p-5 lg:border lg:border-solid lg:border-gray-300 lg:rounded-b-[8px]">
                  <span className="text-sm font-semibold">
                    <Link href={`/${post?.author?.username}`}>
                      <a>{post?.author?.username}</a>
                    </Link>
                  </span>
                  <span className="ml-1 text-sm">{post?.content}</span>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default FrontPagePosts
