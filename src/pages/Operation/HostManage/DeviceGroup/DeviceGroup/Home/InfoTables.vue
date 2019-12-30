<template>
  <div class="info-tables">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="流量图" name="flow-chart">
        <FlowChart></FlowChart>
      </el-tab-pane>
      <el-tab-pane label="进程表" name="process-table">
        <ProcessTable></ProcessTable>
      </el-tab-pane>
      <el-tab-pane label="软件安装列表" name="software-list">
        <SoftwareList></SoftwareList>
      </el-tab-pane>
      <el-tab-pane label="路由表" name="route-list">
        <RouteList></RouteList>
      </el-tab-pane>
      <el-tab-pane label="硬件信息" name="hardware-info">
        <HardwareInfo></HardwareInfo>
      </el-tab-pane>
      <el-tab-pane label="用户表" name="user-list">
        <UserList></UserList>
      </el-tab-pane>
      <el-tab-pane label="接口表" name="interface-list">
        <InterfaceList></InterfaceList>
      </el-tab-pane>
      <el-tab-pane label="存储表" name="storage-list">
        <StorageList></StorageList>
      </el-tab-pane>
      <el-tab-pane label="UDP" name="udp-list">
        <UdpList></UdpList>
      </el-tab-pane>
      <el-tab-pane label="TCP" name="tcp-list">
        <TcpList></TcpList>
      </el-tab-pane>
      <el-tab-pane label="IP地址表" name="ip-list">
        <IpList></IpList>
      </el-tab-pane>
      <el-tab-pane label="CPU" name="cpu-list">
        <CpuList></CpuList>
      </el-tab-pane>
      <el-tab-pane label="ARP表" name="arp-list">
        <ArpList></ArpList>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import FlowChart from "./InfoTables/FlowChart";
import ProcessTable from "./InfoTables/ProcessTable";
import SoftwareList from "./InfoTables/SoftwareList";
import RouteList from "./InfoTables/RouteList";
import HardwareInfo from "./InfoTables/HardwareInfo";
import UserList from "./InfoTables/UserList";
import InterfaceList from "./InfoTables/InterfaceList";
import StorageList from "./InfoTables/StorageList";
import UdpList from "./InfoTables/UdpList";
import TcpList from "./InfoTables/TcpList";
import IpList from "./InfoTables/IpList";
import CpuList from "./InfoTables/CpuList";
import ArpList from "./InfoTables/ArpList";

export default {
  name: "InfoTables",
  components: {
    FlowChart,
    ProcessTable,
    SoftwareList,
    RouteList,
    HardwareInfo,
    UserList,
    InterfaceList,
    StorageList,
    UdpList,
    TcpList,
    IpList,
    CpuList,
    ArpList
  },
  props: {},
  data() {
    return {
      activeName: "flow-chart"
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleClick(data) {
      console.log(data);
    }
  }
};
</script>
<style lang="less" scoped>
</style>