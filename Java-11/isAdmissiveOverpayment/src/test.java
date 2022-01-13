
public class test {
	static boolean solution(double[] prices, String[] notes, double x) {
	    double total = 0;
	    if(prices.length != notes.length) return false;
	    for(int i = 0; i < prices.length; i++) {
	        String note = notes[i];
	        int index = notes[i].indexOf("%");
	        if(index == -1) continue;
	        double percentage = Double.parseDouble(note.substring(0, index));
	        if(note.contains("lower")) {
	            total -= prices[i] - prices[i]/(100 - percentage)/100 ;
	        } else if(notes[i].contains("higher")) {
	            total += prices[i] + prices[i]/(100+percentage)/100;
	        } 
	    }
	    System.out.println(total);
	    
	    if(total > x) {
	        return false;
	    } else {
	        return true;
	    }
	}
	
	
	public static void main(String args[]) {
		double[]prices = {48, 165};
		String[] notes={"20.00% lower than in-store", 
				 "10.00% higher than in-store"};
				int x= 2;
		
		System.out.println(solution(prices, notes, x));
	}
}


