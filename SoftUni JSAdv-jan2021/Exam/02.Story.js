class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this.likesArr = [];
    }
    
    get likes() {
        if (this.likesArr.length == 0) {
            return `${this.title} has 0 likes`
        }
        if (this.likesArr.length == 1) {
            return `${this.likesArr[0]} likes this story!`
        }
        if (this.likesArr.length == 1) {
            return `${this.likesArr[0]} likes this story!`
        }
        return `${this.likesArr[0]} and ${this.likesArr.length - 1} others like this story!`
    }

    like(username) {
        if (this.likesArr.includes(username)) {
            throw new Error("You can't like the same story twice!")
        }
        if (this.creator == username) {
            throw new Error("You can't like your own story!")
        }
        this.likesArr.push(username)
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this.likesArr.includes(username)) {
            throw new Error("You can't dislike this story!");
        }
        let index = this.likesArr.indexOf(username);
        this.likesArr.splice(index, 1)
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        let commentData = { username, content, id }
        let findComment = this.comments.some(comm => comm.id == id)
        if (!findComment || id == undefined || id == NaN) {
            if (id == undefined || id == NaN) {
                commentData.id = this.comments.length + 1;
            }
            this.comments.push(commentData)
            return `${username} commented on ${this.title}`
        }
        let targetedComm = this.comments.find(({ id }) => id == id);
        if (!targetedComm.hasOwnProperty('reply')) {
            targetedComm.reply = { id, username, content }
        } else targetedComm.reply.id++


        return "You replied successfully";
    }

    toString(sortingType) {
        let ids = [];
        for (const item of this.comments) {
            ids.push(item.id)
            if(item.hasOwnProperty('reply')){
                ids.push(item.reply.id);
            }
        }
        
        console.log(ids);
        let result = [`Title: ${this.title}`,
        `Creator: ${this.creator}`,
        `Likes: ${this.likesArr.length}`,
            `Comments:`];

        if (sortingType == 'desc') {
            
        }
        if (sortingType == 'asc') {
            for (const item of this.comments) {
                result.push(`--${item.id}. ${item.username}: ${item.content}`);
            }
        }
        if (sortingType == 'username') {

        }
        console.log(result.join('\n'));
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));