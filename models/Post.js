const db = require('../db');

class Post {
  static createPost(user_id, title, post, name) {
    const queryText = 'INSERT INTO posts (user_id, title, post, name) VALUES ($1, $2, $3, $4);';

    return db.query(queryText, [user_id, title, post, name]);
  }

  static deletePost(postId) {
    const queryText = 'DELETE FROM posts WHERE post_id = $1';
    return db.query(queryText, [postId]);
  }

  static getLastCreated() {
    return db.query('SELECT * FROM posts ORDER BY post_id DESC LIMIT 1;');
  }

  static getPosts() {
    return db.query('SELECT * FROM posts;');
  }

  static getUsersPosts(user_id) {
    const queryText = 'SELECT * FROM posts WHERE user_id = $1;';
    return db.query(queryText, [user_id]);
  }

  static updatePost(postId, title, post, name){
    const queryText = `UPDATE posts SET title = $2, post = $3, name = $4 WHERE post_id = $1;`;
    return db.query(queryText, [postId, title, post, name]);
  }
}

module.exports = Post;