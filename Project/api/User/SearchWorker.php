<?php

include("../Connection.php");


if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $selQry = "select * from tbl_worker w inner join tbl_workertype t on t.wokertype_id=w.workertype_id inner join tbl_place p on p.place_id=w.place_id inner join tbl_district d on p.district_id=d.district_id
        where p.place_id='".$_GET["pid"]."' and t.wokertype_id='".$_GET["tid"]."'";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    }

    

?>