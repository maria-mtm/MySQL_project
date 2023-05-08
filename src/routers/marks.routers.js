const { Router } = require("express");
const router = Router();
const marksCtrl = require("../controller/marks.controller");

// router.get("/", studentsCtrl.getStart);

router.get("/media", marksCtrl.getMedia);
router.get("/apuntadas", marksCtrl.getApuntadas);
router.get("/impartidas", marksCtrl.getImpartidas);


module.exports = router;



