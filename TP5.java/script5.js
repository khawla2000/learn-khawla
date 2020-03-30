function Membre(i,n,g){
    this.id = i;
    this.name = n;
    this.garde = g;
    this.tostring=fonction()
        return 'id:'+ this.id + 'name:'+ this.name + 'garde:' + this.garde +'\n';
    }
function Team(){
    this.t = new Array();
    this.add = function(Membre){
        var indice = this.t.length
        this.t[indice] = Member
    }
}
var estTeam=new Team();
estTeam.add(new Member(10,'khawla','A'))
estTeam.add(new Member(11,'Malak','B'))
estTeam.add(new Member(12,'Douaa','C'))
estTeam.add(new Member(13,'Nassim','D'))
estTeam.add(new Member(14,'Chaima','E'))
console.log(est Team)
for (var i=0;i<est Team.t.length.i++){
    console.log(estTeam.t[i].tostring())
}
