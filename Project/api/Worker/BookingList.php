
<?php
    include("../Connection.php");



    if($_SERVER['REQUEST_METHOD']=="GET")
    { 
        $selQry = "select * from tbl_request r inner join tbl_worker w on w.worker_id=r.worker_id inner join tbl_workertype t on t.wokertype_id=w.workertype_id inner join tbl_place p on p.place_id=w.place_id inner join tbl_district d on p.district_id=d.district_id inner join tbl_user u on u.user_id=r.user_id where w.worker_id='".$_GET["wid"]."'";
        $result = $Conn->query($selQry);
        $rows = array();
        while($r = $result->fetch_assoc()) {
            $rows[] = $r;
            }
            print json_encode($rows);

    
    
        }

?>