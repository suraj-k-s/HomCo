<?php
    include("../Connection.php");



    if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $selQry = "select * from tbl_place where district_id='".$_GET["id"]."'";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    
        }

?>