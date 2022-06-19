module.exports = {
    name: "$onlyPerms",
    description: "Only allow users with specific permissions to use this command",
    usage: "$onlyPerms[permission,permission,...;error message]",
    code: async (d) => {
        const [perms, ms = ''] = d.data.splits;
        const mss = d.util.embedParser(ms);
        const permsList = perms.split(',');
        const memberPerm = d.member.permissions.toArray();
        const hasPerm = permsList.some(perm => memberPerm.includes(perm) || memberPerm.includes('ADMINISTRATOR'));
        d.data.datas.isError = !hasPerm;
        d.data.datas.isError && ms ? d.msg.channel.send(mss) : '';
        return '';
    }
}
