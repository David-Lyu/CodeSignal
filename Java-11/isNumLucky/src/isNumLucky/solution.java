package isNumLucky;

public class solution {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		solution(1230); // true
	}
	static boolean solution(int n) {
	    String nString = String.valueOf(n);
	    int halfIndex = nString.length()/2;
	    
	    String firstHalf = nString.substring(0,halfIndex);
	    String secondHalf = nString.substring(halfIndex);
	    
	    int firstSum = 0;
	    int secondSum = 0;
	    
	    for(int i = 0; i < firstHalf.length(); i ++) {
	        firstSum += Character.getNumericValue(firstHalf.charAt(i));
	        secondSum += Character.getNumericValue(secondHalf.charAt(i));
	    }
	    
	    if(firstSum == secondSum) return true;
	    return false;
	}


}
