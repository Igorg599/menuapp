<?php
    $obj = file_get_contents('./components/db.json/');

    echo json_encode($obj);
?>