import { BookmarkType } from '@/types';
import React from 'react';
import Bookmark from '@/app/components/Bookmark';

type Props = {
    bookmarks: BookmarkType[]
}

const Bookmarks: React.FC<Props> = ({bookmarks}) => {
    return (
        <div>
            <h1>Welcome to Bookmarker</h1>
            {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)
            // bookmarks.map(bookmark => {
            //     return (
            //         <h2 key={bookmark.id}>{bookmark.title}</h2>
            //     )
            // })
            }            
        </div>
    );
};

export default Bookmarks;