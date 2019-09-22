import React, { Component } from "react";

import Post from "../Post";

import "./style.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Will Smith",
          avatar:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY256_CR2,0,172,256_AL_.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Henry Cavill",
              avatar:
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNTExMzUzOF5BMl5BanBnXkFtZTgwOTI1MjA3OTE@._V1_UX172_CR0,0,172,256_AL_.jpg"
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gal Gadot",
          avatar:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY256_CR42,0,172,256_AL_.jpg"
        },
        date: "04 Jun 2019",
        content:
          "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 2,
            author: {
              name: "Sophie Turner",
              avatar:
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyNzE5OTkzMV5BMl5BanBnXkFtZTgwNzM4ODAzMjE@._V1_UY256_CR1,0,172,256_AL_.jpg"
            },
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 3,
            author: {
              name: "Rami Malek",
              avatar:
                "https://m.media-amazon.com/images/M/MV5BODEwMjkzNDIzOV5BMl5BanBnXkFtZTgwOTQ4NTU0NzE@._V1_UX172_CR0,0,172,256_AL_.jpg"
            },
            content:
              "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <section class="post-list">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </section>
    );
  }
}

export default PostList;
