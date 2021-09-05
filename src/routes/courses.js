const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// CourseController.index();

router.get('/create', courseController.create);
router.post('/store', courseController.store); // POST gửi yêu cầu lên sever và yêu cầu lưu lại dữ liệu
router.get('/:id/edit', courseController.edit); // GET gửi yều cầu lên sever và trả về dữ liệu
router.post('/handle-form-actions', courseController.handleFormActions);
router.put('/:id', courseController.update);  // PUT chỉnh sửa dữ liệu nhiều thằng 1 lúc
router.patch('/:id/restore', courseController.restore);  // PACTH chỉnh sửa dữ liệu 1 thằng
router.delete('/:id', courseController.destroy); // DELETE xóa dữ liệu
router.delete('/:id/force', courseController.forceDestroy); // DELETE xóa dữ liệu
router.get('/:slug', courseController.show);

module.exports = router;
