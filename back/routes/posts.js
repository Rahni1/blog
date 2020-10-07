const express = require('express')
const router = express.Router()

const { list, create, readBySlug, read, edit, deletePost, diamond } = require('../controllers/posts')
const { requireSignin, isAuth } = require('../controllers/auth')
const { userById, listPostsBySignedInUser } = require('../controllers/user')


router.get('/', (list))
router.get('/post/:slug/:id', (readBySlug)) 

router.post('/new-post/:userId', (isAuth, requireSignin, create))

router.put('/:userId/:id/edit', (isAuth, requireSignin, edit))
router.put('/diamond/:userId/:id', (diamond))

router.delete('/post/:id/:userId', (isAuth, requireSignin, deletePost))

router.param("userId", userById);

module.exports = router
