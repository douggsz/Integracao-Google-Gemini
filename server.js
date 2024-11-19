import express from 'express';

const app = express();

app.use(express.json());

const posts = [
    {id: 1,title: "Primeira postagem sobre JavaScript",image: "https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"},
    {id: 2,title: "Segunda postagem sobre JavaScript",image: "hhttps://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}, // Imagem placeholder},
    {id: 3,title: "Novidades sobre React",image: "https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"},
    {id: 4,title: "Dicas para iniciantes em programação",image: "https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"},
    {id: 5,title: "Análise de um algoritmo de ordenação",image: "https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"},
  ];

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

function getPostById(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};

app.get('/post/:id', (req, res) => {
    const index = getPostById(req.params.id);
    res.status(200).json(posts[index]);
})