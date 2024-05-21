// import { BookmarkType } from '@/types';
import { BookmarksResponse } from "@/types";
import React from 'react';
import Bookmark from '@/app/components/Bookmark';

type Props = {
    // bookmarks: BookmarkType[]
    bookmarks: BookmarksResponse
}

const Bookmarks: React.FC<Props> = ({bookmarks}) => {
    return (
        <div>
            <h1>Welcome to Bookmarker</h1>
            {
            bookmarks.data.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)
            //bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)
            }            
        </div>
    );
};

export default Bookmarks;