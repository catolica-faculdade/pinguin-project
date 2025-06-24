import { useState } from "react";

function NewComment({ comments, setComments, user, handleKeyDown, inputValue, setInputValue }) {

    return (
        <div className="flex items-center gap-1 justify-between w-full rounded-b-2xl bg-navbar p-4 pb-0 border">
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Faça um comentário..."
                className="focus:outline-none focus:ring-0 focus:border-none w-full resize-none overflow-hidden break-words bg-transparent"
                rows={2}
            />
        </div>
    );
}

export default NewComment;
